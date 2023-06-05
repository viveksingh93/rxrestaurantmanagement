<template>
<div class="footer">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="lft"> <p>Copy Right  @ vivek singh 2023</p>
    
</div>
</div>
</template>

<script>
export default {
    name: 'FooterComp',
}
</script>

<style>
.footer {
    background-color: #333;
    position: absolute;
    color: rgb(255, 254, 255);
    width: 100%;
    text-align: center;
    left: 0;
    bottom: 0;
    height: 50px;
}

.lft {
    float: center;
}

.right {
    float: right;
    text-align: justify;
    width: 500px;
    position: initial;

}
</style>
