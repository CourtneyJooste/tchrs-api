/**
 * CatchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getCatch: (request, response) => {
        // See views/pages/catch for template
        return response.view('pages/catch', {
             // A title for the page, not required
            title: "Test",
            // The image that will be fetched in metadata
            // Query db and select a fisher image to put here
            metaImage: "https://wp-test.sencha.com/wp-content/uploads/2016/02/icon-sencha-test-studio-1.png"
        });
	},

};

