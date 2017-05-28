<template>
  <div>
    <h2 class="route">
      Sorry, couldn't find that page :(...
    </h2>
    <h3>Here are some things you can do</h3>
    <ul>
      <li><a href="/">Return to home</a></li>
      <li><a href="/resources">Checkout my resources list</a></li>
      <li><a type="button" data-toggle="modal" data-target=".bs-example-modal-sm">Subscribe so you never have to look for the content again</a></li>
    </ul>

    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <!-- Begin MailChimp Signup Form -->
          <div id="mc_embed_signup">
            <form action="//ditisanton.us15.list-manage.com/subscribe/post?u=4daa678e6fe357534ba238865&amp;id=8aed1b2d49" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">Email Address <span class="asterisk">*</span>
                  </label>
                  <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                </div>
                <div class="mc-field-group">
                  <label for="mce-FNAME">First Name </label>
                  <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
                </div>
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_4daa678e6fe357534ba238865_8aed1b2d49" tabindex="-1" value=""></div>
                <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
              </div>
            </form>
          </div>
          <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
          <!--End mc_embed_signup-->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
</script>

<style>

</style>
