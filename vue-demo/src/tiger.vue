<template>
    <table border="0" cellpadding="0" cellspacing="1">
			<tbody><tr>
				<td id="0" :class="{active:active===0}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/0.png);background-size:cover;"></td>
				<td id="1" :class="{active:active===1}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/1.png);background-size:cover;"></td>
				<td id="2" :class="{active:active===2}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/2.png);background-size:cover;"></td>
				<td id="3" :class="{active:active===3}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/3.png);background-size:cover;"></td>
				<td id="4" :class="{active:active===4}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/4.png);background-size:cover;"></td>
				<td id="5" :class="{active:active===5}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/5.png);background-size:cover;"></td>
				<td id="6" :class="{active:active===6}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/6.png);background-size:cover;"></td>
			</tr>
			<tr>
				<td id="19" :class="{active:active===19}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/19.png);background-size:cover;"></td>
				<td colspan="5" rowspan="3" style="background:#66cc33;text-align:center;position:relative;">
					<div class="Img"></div>
					<div class="button staBtn" @click="start">开始抽奖</div>
					<div class="button czBtn" @click="init">重置</div>
				</td>
				<td id="7" :class="{active:active===7}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/7.png);background-size:cover;"></td>
			</tr>
			<tr>
				<td id="18" :class="{active:active===18}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/18.png);background-size:cover;"></td>
				<td id="8" :class="{active:active===8}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/8.png);background-size:cover;"></td>
			</tr>
			<tr>
				<td id="17" :class="{active:active===17}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/17.png);background-size:cover;"></td>
				<td id="9" :class="{active:active===9}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/9.png);background-size:cover;"></td>
			</tr>
			<tr>
				<td id="16" :class="{active:active===16}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/16.png);background-size:cover;"></td>
				<td id="15" :class="{active:active===15}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/15.png);background-size:cover;"></td>
				<td id="14" :class="{active:active===14}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/14.png);background-size:cover;"></td>
				<td id="13" :class="{active:active===13}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/13.png);background-size:cover;"></td>
				<td id="12" :class="{active:active===12}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/12.png);background-size:cover;"></td>
				<td id="11" :class="{active:active===11}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/11.png);background-size:cover;"></td>
				<td id="10" :class="{active:active===10}" style="background:url(https://www.jq22.com/demo/jquery-h5laohuji20151211/images/10.png);background-size:cover;"></td>
			</tr>
		</tbody></table>
</template>

<script>
export default{
    data(){
        return {
            active: 0,
            circle: 0,
            resutl: 0,
            isRuning: false
        }
    },
    methods: {
        start(){
            if (this.isRuning){
                return;
            }
            this.isRuning = true;
            this.init();
            let inter = setInterval(()=>{
            this.active = (this.active + 1)%20
            if (this.active === 19){
                this.circle++;
                console.log('转了多少圈...', this.circle);
                if (this.circle == 4){
                    this.result = Math.floor(Math.random()*20);
                }
            }
            if (this.circle == 4 && this.result === this.active){
                clearInterval(inter);
                this.isRuning = false;
            }
        }, 60)
        },
        init(){
            this.active = 0;
            this.circle = 0;
            this.resutl = 0
        }
    },
    mounted(){

    }
}
</script>

<style lang="scss">
td{
    width: 110px;
    height: 110px;
    border: 4px solid transparent;
}
td.active{
    border: 4px solid #660066;
}
.button{
    width: 150px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    color: #fff;
    font-family: "Microsoft Yahei";
    background-color: rgb(106,38,19);
    position: relative;
    border-radius: 3px;
    cursor: pointer;
    top: 100px;
}
</style>