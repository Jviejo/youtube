import { getYoutubeTranscript } from "./lib/youtube";

export default async function Home() {
  const transcript = await getYoutubeTranscript("dQw4w9WgXcQ");
  return (
    <div>
      Hello
      {JSON.stringify(transcript)}
    </div>
  );
}
