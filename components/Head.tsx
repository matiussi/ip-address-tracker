import HeadNext from 'next/head'
 
const Head: React.FC = () => {
   return ( 
      <HeadNext>
         <title>IP Address Tracker</title>
         <link rel="icon" type="image/png" href="img/favicon-32x32.png" />
      </HeadNext> 
   );
}
 
export default Head;