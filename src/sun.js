var Base = requireBaseModule();

var Sun = function(bot) {
    Base.call(this, bot);

    this.hear(/:(sun_with_face|sunny):/i, (response) => {
        response.reply('http://i.imgur.com/aWEX2UC.gif');
    });
};

module.exports = Base.setup(Sun);
