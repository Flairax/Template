import questionsJson from './ratings.INIT.json';

const questions = [];

for (let key in Object.keys(questionsJson.Questions)) {
   questions.push(questionsJson.Questions[key]);
}


const ratings = (state = questions, action) => {
   if (action.payload === "") return state

   switch (action.type) {
      /*=============================================================*/   
      case 'RATE': {
         return [
            ...state.slice(0, state.indexOf(action.payload.currQues)),
            {
               id: action.payload.currQues.id,
               text: action.payload.currQues.text,         
               mark: action.payload.mark
            },
            ...state.slice(state.indexOf(action.payload.currQues) + 1)
         ]
      }
      /*=============================================================*/   
      default:
         return state;
   }
}

export default ratings;