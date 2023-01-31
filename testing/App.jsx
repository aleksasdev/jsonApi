
import { nanoid } from 'nanoid';
import { Fetcher } from '@aleksasdev/json-api';

function App() {

   const DATABASE_URL = 'http://localhost:5000/users';
   const TESTING_ID = "pc9oMRu2z4VynhUzYqmj8";

   const handleGet = async () =>{
      const results = await new Fetcher(DATABASE_URL, "").get();
      console.log(results);
   }

   return (
      <>
         <button onClick={handleGet}>Get</button>

         <button onClick={e => new Fetcher(DATABASE_URL, "").post({
            id: nanoid(),
            username: nanoid()
         })}>Post</button>

         <button onClick={e => new Fetcher(DATABASE_URL, "").delete()}>Delete</button>

         <button onClick={e => new Fetcher(DATABASE_URL, TESTING_ID).put({
            username: "test."
         })}>Put</button>

         <button onClick={e => new Fetcher(DATABASE_URL, TESTING_ID).patch({
            ff: "teeeeeeeeest."
         })}>Patch</button>
      </>
   );
}

export default App;
