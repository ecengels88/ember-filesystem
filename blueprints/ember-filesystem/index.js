/*jshint node:true*/
module.exports = {
  description: ''

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return RSVP.all([
      this.addPackageToProject('ember-network', '^0.3.0');
    ]);
  }
};