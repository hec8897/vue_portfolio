<template>
    <div class='contact'>
        <h2>CONTACT</h2>
        <p>웹 개발자 김다운</p>
        <div class="foot wrap">
            <ul>
                <li>
                    <img src='../../assets/touch-screen.png'>
                    <h3>Phone</h3>
                    <p>010-2386-6487</p>
                </li>
                <li>
                    <img src='../../assets/communications.png'>
                      <h3>Email</h3>
                      <p>hec8897@naver.com</p>
                </li>
                <li>
                    <img src='../../assets/interface.png'>
                      <h3>Address</h3>
                      <p>경기도 김포시 걸포1로 40 104동 903호</p>
                </li>
            </ul>
            

        </div>
    </div>
</template>

<style lang="scss">
div.contact{
        padding: 50px 0px;
    box-sizing: border-box;
    h2{
        text-align: center;
        font-size: 1.875rem;
       
    }
    p{
        text-align: center;
        margin: 20px 0px;
        @media (max-width: 767px) {
            font-size: 0.75rem;
        }

    }
    ul{
        text-align: center;
        margin-bottom: 50px;
        li{
            display: inline-block;
            width: 33%;
            border-right: 1px solid #d0d0d0;
            box-sizing: border-box;
            padding: 50px 0px;
            &:last-child{
                border-right: 0;;
            }
                @media (max-width: 767px) {
                    vertical-align: top;
                    padding: 50px 10px;
                }


            img{
                width: 65px;
                @media (max-width: 767px) {
                    width: 30px;
            
                }
            }
            h3{
                margin: 15px 0px;
       
            }
        }
    }
}
    
</style>