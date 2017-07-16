<template>
  <div>
    <h2 class="route">
      Sorry, couldn&#39;t find that page :(...
    </h2>
    <h3>Here are some things you can do</h3>
    <ul>
      <li><a href="/">Return to home</a></li>
      <li><a href="/resources">Checkout my resources list</a></li>
      <li><a href="/social">Find my social pages</a></li>
    </ul>

    <div class="modalAlign"></div>
    <button id="subscribeBtn" class="modalBtn" @click="toggleModal('SUBSCIBE')">Subscribe</button>
    <div class="modalAlign">
      <transition name="fade" mode="out-in">
        <div v-if="showSubscribeModal" class="modal">
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
                  <div class="clear">
                    <button>Subscribe</button>
                    <button class="closeButton" @click.prevent="closeModal('SUBSCIBE')">Close</button>
                  </div>
                </div>
              </form>
            </div>
            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
            <!--End mc_embed_signup-->
          </div>
        </div>
      </transition>
    </div>

    <!-- Message Me Modal -->
        <button class="modalBtn" @click="toggleModal('MESSAGE_ME')">Message Me</button>
        <div class="modalAlign">
          <transition name="fade" mode="out-in">
            <div v-if="showMessageMeModal" class="modal">
              <div class="modal-content">
                  <h3>Send me a message</h3>
                  <hr />
                  <form>
                    <div>
                      <label>Subject</label>
                      <input type="text" v-model="emailSubject" placeholder="Subject...">
                    </div>
                    <div>
                      <label>Message</label>
                      <textarea v-model="emailText" placeholder="Your message..."></textarea>
                    </div>
                  </form>
                <div>
                  <button @click="sendEmail">Send message</button>
                  <button class="closeButton" @click="closeModal('MESSAGE_ME')">Close</button>
                </div>
              </div>
            </div>
          </transition>
        </div>
        
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailSubject: '',
      emailText: '',
      showMessageMeModal: false,
      showSubscribeModal: false
    }
  },
  methods: {
    sendEmail() {
      let email = {
        subject: this.emailSubject,
        text: this.emailText
      }
      this.$store.dispatch('sendEmail', email)
      this.showMessageMeModal = false
      this.emailSubject = ''
      this.emailText = ''
    },
    toggleModal(modal) {
      switch (modal) {
        case 'MESSAGE_ME':
          this.showMessageMeModal = true
          break;
        case 'SUBSCIBE':
          this.showSubscribeModal = true
          break;
        default:
      }
    },
    closeModal(modal) {
      switch (modal) {
        case 'MESSAGE_ME':
          this.showMessageMeModal = false
          break;
        case 'SUBSCIBE':
          this.showSubscribeModal = false
          break;
        default:
      }
    }
  }
}
</script>

<style>
.modalAlign {
  text-align: left;
}
</style>
