import questionsJson from './ratings.INIT.json';

const questions = [];

for (let key in Object.keys(questionsJson.Questions)) {
   questions.push(questionsJson.Questions[key]);
}


const ratings = (state = questions, action) => {
   if (action.payload === "") return state

   switch (action.type) {
      case 'RATE': {
         console.log(state.indexOf(action.payload.currQues));
         console.log(state.slice(0, state.indexOf(action.payload.currQues)));

         console.log(state.slice(state.indexOf(action.payload.currQues)+1, state.length));
         console.log("state: "+state);
         /*return [
            ...state.filter(question => question.id !== action.payload.currQues.id),
            {
               id: action.payload.currQues.id,
               text: action.payload.currQues.text,         
               mark: action.payload.mark
            },
         ]*/
         return [
            ...state.slice(0, state.indexOf(action.payload.currQues)),
            {
               id: action.payload.currQues.id,
               text: action.payload.currQues.text,         
               mark: action.payload.mark
            },
            ...state.slice(state.indexOf(action.payload.currQues)+1, state.length)
         ]
      }

     
      default:
         return state;
   }
}

export default ratings;