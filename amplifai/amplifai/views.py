from django.urls import reverse
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView
from django.db.models import Max

class TestPage(TemplateView):
    template_name = 'test.html'
#
class ThanksPage(TemplateView):
    template_name = 'thanks.html'

class HomePage(TemplateView):
    template_name = "index.html"

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(reverse("test"))
        return super().get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        try:
            # context['latest_direct_messsage_pk'] = self.request.user.directmessagethread_set.order_by('sent_at').first.pk
            direct_message_threads = self.request.user.directmessagethread_set.all()
            direct_message_threads_last_sent = [x.directmessage_set.aggregate(Max('sent_at'))['sent_at__max']
                                                for x in direct_message_threads]
            direct_message_threads_pk = [x.pk for x in direct_message_threads]
            direct_message_threads_pk_sorted, _ = zip(*sorted(zip(
                direct_message_threads_pk, direct_message_threads_last_sent), key=lambda x: x[1], reverse=True))
            context['latest_direct_messsage_pk'] = direct_message_threads_pk_sorted[0]
            print(context['latest_direct_messsage_pk'])
        except:
            pass
        return context
