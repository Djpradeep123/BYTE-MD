
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "pradeepkumawat574@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "6289653858443@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "6289653858443";
global.website = process.env.GURL || "6289653858443";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "6289653858443";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "917073837465";
global.owner = process.env.OWNER_NUMBER || "6289653858443";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUNQbURvWjN0RWIrSTVEQlhOZktyNnVvQjlVUTFQMU91dlV1US9qbDJXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGZ2UHFnaTkzNUdsSEhLb25pZFFUR0l2VC9LZDk3aE5acTFjVGdsRXRSQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Qi9BQWJWY2ZCVUY2YWlINC9hZHp3OEZqMG9ZVXJycnRxYmlLd2p6djBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwWk9pcmo3WEdxK3RTNVNEcUg2QnRMNGp2eE9IZkx4L3YvaFVBV2J3ZjJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlLeS85c0hpeTR0SVJsMzNXMUtkdDRUYTZPMUlTaUxTNURVNDEwOHRqMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQyOFdZdG53RFNNdjl3MGNFWnQwTkp0UzRaL3llTG5vUmlKdmd4cjBwd1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkNGOUV3RFpFaGxiTkJFZU91WmZPQXpaMnlvaThNeXNDMEw4My9ja0FHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZzlHVG9hK3ZJVTAvMFE1MUlRVTBKZXBoa3BUUXlleHVFRmFVSncwUUVCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpaL2I1cVhsdkJteVpwcTAyOU8zN1dnSmdLVzA4VDlkcGhuWkRNSk84c003R1BRR3FNQ3NxSEkyNHhFNkRsaEd1U3NGRGNHSng4a2Y0VkpEZ2tlemhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJrL2pxRWJBbTIraW51WXExRThoRkF1aWxoN3U4UDkrTnZwdnRtMlBxVHBvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYyODk2NTM4NTg0NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDMxNzk5QzA2RkRFRURDREFEQUNCNjcxQTBBRTc1RkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjUwNzU3Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNjI4OTY1Mzg1ODQ0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNEE3QURDRDc0OUIwMDUzMjMwNTM4Q0EzNEZGNjJDNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNTA3NTc2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI2Mjg5NjUzODU4NDQzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJCQTVCOUE2N0U2MTZCNDFCOTgzQjM4ODYyQTAzMTE2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI1MDc1Nzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjYyODk2NTM4NTg0NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjJDOUYyQzRENzk5Njg0OURGOTM4RkIxMzlFQjU4NTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjUwNzU3OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidHlDc3p4T0JRby1GX2R2RHBXRWZuUSIsInBob25lSWQiOiI3ZTA3ODJhZC1iMTNjLTRlMWQtOGMwZC03YWE4NGViZGRiNTAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVS81WkdTSWh4VVZUdjdUL2ZJWnRHak1zaHpnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndiZHJ4SHVQQ08xTzY1Q0VUc0ZCVW9VdnRCZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQQjg3OFZDUyIsIm1lIjp7ImlkIjoiNjI4OTY1Mzg1ODQ0MzoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJwcmFkZWVwa3VtYXdhdDU3NCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2l0bGNvR0VLckNyYlVHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTHNxODQzaDJmVE1jWDhnell3d2ExSmNSSDNualZlaDNFbXhTZWRpeEtEZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoialhMT2dkR292OUxDNnBLWXVCZFVnalphUGxkYkFXY1hsREtMbjRUbjI5bkVjNGEzWDhjVVhuWEpzdEpxWm8wdzcrdWRta3RuWFhjTGk4dTEzbFliREE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik5OWDcrYXRhczdFd2RkSzh4V0dPdGFueG5iZ01pelp0b1VyRGRHWlBiU004QlNTY0ZFWlIrWEFSUk5lYVU4QWl1cERaczB4dGtyY1NuWXFsWUVIRGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNjI4OTY1Mzg1ODQ0MzoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTN0t2T040ZG4wekhGL0lNMk1NR3RTWEVSOTU0MVhvZHhKc1VubllzU2c0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTA3NTc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVIWiJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "null",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "Pradeep Bot",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Pradeep Bot",
  ownername: process.env.OWNER_NAME || "Pradeep Bot",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
