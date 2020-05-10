<template>
    <div class='slide_inner'>
        <div class='prev_img'>
            {{item.title}}
        </div>
    </div>
</template>

<script>
export default {
    props:['item']
}
</script>
<style lang="scss">
div.slide_inner{
    margin: 5px;
}
div.prev_img{
    width: 100%;
    height: 135px;
    border-radius: 5px;
    background: darkcyan;
    padding: 5px;
    box-sizing: border-box;
}
    
</style>