import Container from "../../components/Container";
import Keyboard from "./Keyboard";
import LivesLeft from "./LivesLeft";
import PuzzleWord from "./PuzzleWord";

const word: { name: string } = { name: "United Kingdom" };

export default function MainPage() {
   return (
      <main className="h-screen">
         <Container>
            <LivesLeft />
            <PuzzleWord word={word.name} />
            <Keyboard />
         </Container>
      </main>
   );
}
