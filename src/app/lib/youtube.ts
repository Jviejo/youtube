"use server";

export async function getYoutubeTranscript(videoId: string) {
    // set a header to avoid 403 error
    const headers = new Headers()
    headers.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3")
    const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`, { headers })
    const data = await response.text()
    const pos1 = data.indexOf("www.youtube.com/api/timedtext")
    console.log("cadena",pos1)
    const pos2 = data.indexOf(",\"",pos1) - 1
    console.log("cadena",pos2)
    const cadena = "https://" + data.substring(pos1,pos2)
    console.log("cadena",cadena)
    // const response1 = await fetch(cadena.replace(/\\u0026/g,"&"))
    const response1 = await fetch("https://www.youtube.com/api/timedtext?v=LRfDAZfo00o&ei=Jbi9ZqzePLehp-oPjuvkmQs&caps=asr&opi=112496729&exp=xbt&xoaf=5&hl=es&ip=0.0.0.0&ipbits=0&expire=1723734678&sparams=ip,ipbits,expire,v,ei,caps,opi,exp,xoaf&signature=B703D0A6359F1467A9C08400031FE4BC5A4571FC.4E3F636DBDE6EDC2AD719763D5043607966CFC6D&key=yt8&kind=asr&lang=en")
    const data1 = await response1.text()
    return data1
  
}
