const Button = ({getRandomGif}) => {
   // button function
   const handleClick = () => {
      getRandomGif()
   }

   return (
      <button onClick={handleClick}>Generate Gif</button>
   )
}

export default Button