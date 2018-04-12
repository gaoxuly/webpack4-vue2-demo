<template>
  <div>
      <h1>公共header</h1>
      <img class="imgIcon" src="../assets/imgs/icon.jpg" alt="">
  </div>
</template>
<style>
.imgIcon{
  cursor: pointer;
}

.imgIcon:hover {
  /* -webkit-animation: shake .3s ease-in-out 0s 3 both;
  animation: shake .3s ease-in-out 0s 3 both; */
   -webkit-animation: imgScale .3s ease-in-out 0s  both;
  animation: imgScale .3s ease-in-out 0s  both;
}
@-webkit-keyframes imgScale{
  100%{
    -webkit-transform: scale(1.2);
    transform: scale(1.2)
  }
}
@-webkit-keyframes imgMove{
  100%{
    -webkit-transform: translateX(30px);
    transform: translateX(30px)
  }
}
@-webkit-keyframes shake{
  0%,50%,100%{
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  25%{
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  75%{
    -webkit-transform: rotate(-15deg);
    transform: rotate(-15deg);
  }
}
</style>

