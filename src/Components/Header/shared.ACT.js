export const toggleACT = function(context){
   context.setState(prevState => {
      return {
         btnClass: prevState.btnClass === "" ? "-CLK" : "",
         blockClass: prevState.blockClass === "" ? "-RVL" : "",
      };
   });
}

export const closeACT = function(context){
   context.setState({
      btnClass: "",
      blockClass: "",
   });
}

export const openACT = function(context){
   context.setState({
      btnClass: "-CLK",
      blockClass: "-RVL",
   });
}