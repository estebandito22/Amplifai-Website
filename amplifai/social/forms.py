from django import forms
from . import models


class SocialPostForm(forms.ModelForm):

    class Meta:
        model = models.SocialPost
        fields = ['text', 'media', 'twitter_post', 'instagram_post', 'facebook_post']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["text"].label = "Message"
        self.fields["media"].label = "Attachments"
        self.fields["twitter_post"].label = "Twitter"
        self.fields["instagram_post"].label = "Instagram"
        self.fields["facebook_post"].label = "Facebook"
        self.fields["media"].widget.attrs.update(
            {'onchange' : "readURL(this);",
             'class': "inputfile post-image-inputfile"})
        self.fields["text"].widget.attrs.update(
            {'class': "form__field", 'placeholder': "Start message...",
             'rows': '4'})
        self.fields['twitter_post'].widget.attrs.update({'class': "btn btn-success", 'autocomplete': 'off'})
        self.fields['instagram_post'].widget.attrs.update({'class': "btn btn-success", 'autocomplete': 'off'})
        self.fields['facebook_post'].widget.attrs.update({'class': "btn btn-success", 'autocomplete': 'off'})


class SocialPostPromotionForm(forms.ModelForm):

    class Meta:
        model = models.SocialPostPromotion
        fields = ['budget']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['budget'].widget.attrs.update({'class': "form__field", 'placeholder': '0.00'})
        self.fields['budget'].label = "Budget ($USD)"
        self.fields['budget'].initial = ""


class HashtagForm(forms.Form):
   def __init__(self, *args, **kwargs):
       choices = kwargs.pop('form_choices')
       field_name = kwargs.pop('field_name')
       super(HashtagForm, self).__init__(*args, **kwargs)
       self.fields[field_name] = forms.MultipleChoiceField(
            choices=choices, widget=forms.CheckboxSelectMultiple(
                attrs={'class': "btn btn-success", 'autocomplete': 'off'}))
