<template>
    <div class='slide_inner'>
        <div class='prev_img' v-bind:style="{'background-image': `url(${this.item.thumnail})`}">
            <div class='inner'>
                <h3>{{item.title}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['item']
}
</script>
<style lang="scss">
@import '../../define.scss';
div.slide_inner{
    margin-right: 10px;
    position: inherit;
}
div.prev_img{
    width: 100%;
    height: 145px;
    border-radius: 5px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    div.inner{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);;
        padding: 5px;
        box-sizing: border-box;
        position: relative;
        transition: .1s ease-in;
        cursor: pointer;
          h3{
                position: absolute;
                color: #fff;
                font-weight: normal;
                left: 5%;
                bottom: 10%;
            }
        &:hover{
            background-color: rgba(0,0,0,0.6);;
            h3{
                color: lighten($MainColor,10%);
            }

        }
    }
  
}
    
</style>