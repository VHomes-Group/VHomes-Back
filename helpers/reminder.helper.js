const { sendEmail } = require("../helpers/nodemailer.helper");
const { baseURL } = require("../config/index");

const sendReminder = async (email, listingName) => {
    const userMailOptions = {
        from: '"NomΛd" <reservations@visitnomad.com>',
        to: email,
        subject: `Your Listing is Expiring Soon!`,
        text: `Please check your account, as your listing for ${listingName} expires next week.`,
        html: `<p>
              Please go to 
              <a href="${baseURL}/myAccount">here</a>
              to update your listing.
             </p>`,
      };
      sendEmail(userMailOptions);
};

module.exports = {
    sendReminder,
  };
  