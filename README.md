# HTML Email Boilerplate

## Using this Boilerplate
This boilerplate provides the basic template for a 600-pixel wide email design for use in the Blue State Digital Tools's Mailing Templates,
along with code examples for content creators when designing mailings.

The simplest way to use this is to swap out brand-specific assets such as logo image paths and font colors. When implementing a Message
Template in the BSD Tools, you will need to define an HTML Header and HTML Footer. The chunks of code for the header and footer are defined
here.

Th `boilerplate_comments.html` document is heavily commented and provides suggestions for best practices along with explanations for email HTML oddities. When
implenting your template for production use it is important to REMOVE ALL COMMENTS. In addition to cleaning up your code and decreasing the
file size of your emails, it avoids potential bugs in certain email clients. For your convenience, the `boilerplate.html` document is provided with comments already removed.

This boilerplate is based heavily off of the boilerplate at [http://www.emailology.org/](http://www.emailology.org/), which is a valuable resource for additional tips and tricks when working with HTML emails. Check it out!

## Contributing
A simple `gulp` task is provided to strip most of the commenting to generate the boilerplate.html file. However, this gulp task has issues removing comments from mixed content (e.g. HTML with embedded CSS). For now, you'll need to manually delete CSS comments from the generated boilerplate.html file.