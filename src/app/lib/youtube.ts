"use server";

export async function getYoutubeTranscript(videoId: string) {
    const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`)
    const data = await response.text()
    const pos1 = data.indexOf("www.youtube.com/api/timedtext")
    console.log("cadena",pos1)
    const pos2 = data.indexOf(",\"",pos1) - 1
    console.log("cadena",pos2)
    const cadena = "https://" + data.substring(pos1,pos2)
    console.log("cadena",cadena)
    const response1 = await fetch(cadena.replace(/\\u0026/g,"&"))
    const data1 = await response1.text()
    return data1
  
}
