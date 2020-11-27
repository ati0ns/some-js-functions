/**
 * Replace all the special characters as 'éàç' by correspondig basic letters as 'eac'.
 * @param {string} str
 */
String.prototype.simplify=str=>str.replace(/([àáâãäå])|(ç)|([èéêë])|([ìíîï])|(ñ)|([òóôõöø])|(ß)|([ùúûü])|(ÿ)|(æ)|(œ)|(ÀÁÂÃÄÅ)|(Ç)|([ÈÉÊË])|([ÌÍÎÏ])|(Ñ)|([ÒÓÔÕÖØ])|(ß)|([ÙÚÛÜ])|(Ÿ)|(Æ)|(Œ)/g,(_,...a)=>a[0]?"a":a[1]?"c":a[2]?"e":a[3]?"i":a[4]?"n":a[5]?"o":a[6]?"s":a[7]?"u":a[8]?"y":a[9]?"ae":a[10]?"oe":a[11]?"A":a[12]?"C":a[13]?"E":a[14]?"I":a[15]?"N":a[16]?"O":a[17]?"S":a[18]?"U":a[19]?"Y":a[20]?"AE":a[21]&&"OE")