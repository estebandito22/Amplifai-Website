from django import forms
from . import models


class HashtagForm(forms.Form):
   def __init__(self, *args, **kwargs):
       choices = kwargs.pop('form_choices')
       field_name = kwargs.pop('field_name')
       super(HashtagForm, self).__init__(*args, **kwargs)
       self.fields[field_name] = forms.MultipleChoiceField(
            choices=choices, widget=forms.CheckboxSelectMultiple(
                attrs={'class': "btn btn-success", 'autocomplete': 'off'}))


class DirectMessageForm(forms.ModelForm):

    class Meta:
        model = models.DirectMessage
        fields = ['text', 'media']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["text"].label = "Message"
        self.fields["media"].label = "Attachments"
        self.fields["text"].widget.attrs.update(
            {'class': "form__field",
             'rows': '4',
             'placeholder': "Start message..."})


class DirectMessageThreadForm(forms.ModelForm):

    class Meta:
        model = models.DirectMessageThread
        fields = ['influencer']
        widgets = {'influencer': forms.HiddenInput()}

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
