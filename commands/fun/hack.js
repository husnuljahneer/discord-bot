const ms = module.require("ms");


module.exports = {
  name: 'hack',
  aliases: [],
  category: 'Fun',
  utilisation: '{prefix}hack [username]',
  description: "Hack someones google account fr",
  execute: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send("Woah.... Slow Down!! Who are we hacking..??")
    }
    const tohack = message.mentions.members.first()
    let msg = await message.channel.send(`Hacking ${tohack.displayName}....`);

    let time = '1s'
    setTimeout(function() {
      msg.edit(`Finding ${tohack.displayName}'s Email and Password.....`);
    }, ms(time));

    let time1 = '6s'
    setTimeout(function() {
      msg.edit(`E-Mail: ${tohack.displayName}@gmail.com \nPassword: ********`);
    }, ms(time1));

    let time2 = '9s'
    setTimeout(function() {
      msg.edit("Finding Other Accounts.....");
    }, ms(time2));

    let time3 = '15s'
    setTimeout(function() {
      msg.edit("Setting up Google Account.....");
    }, ms(time3));

    let time4 = '21s'
    setTimeout(function() {
      msg.edit("Hacking Google Account......");
    }, ms(time4));

    let time5 = '28s'
    setTimeout(function() {
      msg.edit("Hacked Google Account!!");
    }, ms(time5));

    let time6 = '31s'
    setTimeout(function() {
      msg.edit("Collecting Info.....");
    }, ms(time6));

    let time7 = '38s'
    setTimeout(function() {
      msg.edit("Selling data to FBI....");
    }, ms(time7));

    let time8 = '41s'
    setTimeout(function() {
      let pass = [
        'Girls Gone Wireless', 'Drop It Like It’s Hotspot', 'The House of Black and WiFi', 'WiFestores', 'Useit@yourrisk*0', 'House of Donald trump', 'Fight the System', 'A Router of Ice and Fire', 'The Whomping Wi-Fi', 'Pleasewait4sometime', 'AccessDenied4u', 'We are Virus', 'This not For Public', 'NoWiFi4you', 'No More Mister WiFi', 'I Slept With Your WiFi', 'YouarenotAllowed2Use', 'YourDogShitsInMyYard', 'Default', 'IdontLikey@urass', 'Traffic Sniffer', 'NSA Drone #3', 'Avengers Networks', 'Homeland Security', 'Desperate HouseWiFi', 'internet from Asgard', 'Networkis2Slow@', 'Pentagon', 'TellMyWifiLoveHer', 'UnprotectedCex@18', 'zombies_ate_my_neighbor', 'Dontlook@me', 'Bill Wi the Science Fi', 'DoUthinkitsfree$0', 'Out Of Order Try Later', 'inSSIDer', 'Only for Girl’s', 'WhyShouldIgiveit2u', 'UseYourOwnNetwork%1', 'NSA Listening Post', 'DontEvenTry2Hack!', 'No Free WiFi For You', 'Don’t Hack my Wife', 'Zelda a Linksys to the Past', 'IHazWifi', 'Pick Up Your Dog Crap', 'Ermahgerd We Fer', 'Sent your Birth Certificate for WiFi', '99 problems but wifi aint one', 'VirusInfected@2PM', 'WiFi@40$dPH', 'Two Girls One Router', 'Iam18@Loveyou', 'I’m not Single', 'WhyuWantPassword?', 'FreeWifi', 'Wi-fi is Coming', 'Sent me Pizza for Wifi', 'Wait4sometime@', 'WiFi Of Thanos', 'Tony stark’s Network', 'lastdudeisakeeper4real', 'cadet', 'i12kissu', 'whatpassword', 'wgh', 'kwanzaa', 'TheyRWatching', 'Nothing', 'MisterNasty12', 'Itnowknow', 'IAmACompleteIdiot', 'BeautifulBitch', 'fluffy72Is2Short', '123neverguess', 'luckyFan', 'iamnottellingyoumypw', 'iloveme', 'marybakereddy', 'gojihad', 'FBISurveillanceVan', 'gorving', 'shoveit', 'kittysoup', '2BBlue', 'pussingwound', 'omghi2u', 'giiglepig', 'mississippi', 'chaunukkah', 'iforgotagain', 'turkey01', 'pwnedyou', 'swordfish', 'pwnz0red', 'ninnypants', 'teamynsexy69', 'mypassword', 'Threetimes', 'hairyback', 'turkey02', 'iamforgetful', 'ShitHead1', 'iForgot', 'lookatme', 'runaway', 'sharkbait', 'jesuswenis', 'dryhump', 'adolftheclown', 'hairygrandma', 'OOHAHAH!', 'justkeepswimmin', 'ithinkican', 'ithoughticould', 'mypsychoex', 'jewishnipple', 'facebookboo', 'babajikathullu', 'MickeyMinnieGoofyPluto', 'qwertyui', 'honeybump', 'ghanta', 'bond007', 'jordannike', 'baseballandfootball', 'mercedes', 'doggie', 'spanky', 'mateRIST', 'DicRedRy', 'iloveu', 'cowboysvstexans', 'vERtiOus', 'harley', 'buster', 'killergirl', 'batmanandrobbin', 'samantha', 'amateur', 'strucant', 'xxxxxxxx', 'chainsawwedding', 'youwontguessthisone', 'yetanotherpassword', 'passwordshmassword', 'aStRoIsh', 'cludAlly', 'Inflexer', 'GrEssatE', 'EXgENiNg', 'cHroMFul', 'doubleclick', 'youmoron', 'i8urfa8', 'iamtheverymodelofamodernmajorpassword', 'pinkfluffybunny', 'dopeydon’tgetmine', 'icanttellyou'
      ]

      let passR = pass[Math.floor(Math.random() * pass.length)];
      msg.edit(`Finished Hacking ${tohack.displayName}`);
      msg.edit(`E-Mail: ` + tohack + `@gmail.com`);
      msg.edit(`Password Found : ` + passR);
    }, ms(time8));

  }
}