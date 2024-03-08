const ShinyDivider = () => {
  return (
    <>
      <div className="animation-star-falling">
        <span></span>
      </div>

      <style>
        {`
        .animation-star-falling{
            animation: animateBg 50s linear infinite;

            width:50%
      
        }
        .animation-star-falling> span {
                position: absolute;
                // top:50%;
                right:0;
                width: 4px;
                height: 4px;
                background: #fff;
                border-radius: 50%;
                box-shadow: 0 0 0 4px rgba(255,255,255,0.1),0 0 0 8px rgba(255,255,255,0.1),0 0 20px rgba(255,255,255,0.1);
                animation: animate 3s linear infinite;
            }
            .animation-star-falling> span::before{
                content:'';
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 200px;
                height: 1px;
                background: linear-gradient(90deg,#fff,transparent);
            }

            @keyframes animateBg{
                0%,100%{
                    transform: scale(1);
                }
                50%{
                    transform: scale(1.2);
                }
              
            }

            @keyframes animate {
                0% {
                    transform: rotate(0) translateX(0);
                    opacity: 1;
                }
                70% {
                    opacity: 1;
                }
                100% {
                    transform: rotate(0) translateX(-1000px); 
                    opacity: 0;
                }
          
            } `}
      </style>
    </>
  );
};

export default ShinyDivider;
