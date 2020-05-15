module.exports = {
  portlocal: process.env.PORT || 3002,
  porthttp: process.env.PORT  || 80,
  porthttps: process.env.PORT || 443,
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/blockchain',
  SECRET_TOKEN: 'poner el token',
  addressAllow:['::1', '::ffff:201.159.223.92','::ffff:186.43.152.112'],
  keyAccount:'seed',
  addressJsonServerHash:'http://201.159.223.92:9090/hashes',
  addressJsonServerCert:'http://201.159.223.92:9090/certificates',
  addresSeliPlatform:'https://seli.uazuay.edu.ec/certificate-result/',
  blockcahinAddress:'http://201.159.223.92:9091',
  blockcahinServer:'http://201.159.223.92',
  key = 'poner la clave '

}
