<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="phone"
      name="phone"
      label="用户名"
      placeholder="您的手机号"
      :rules="[{ pattern: /^1[3456789]\d{9}$/, message: '请填写正确的手机号' }]"
    />
    <van-field
      v-model="code"
      type="number"
      maxlength="6"
      name="code"
      label="密码"
      placeholder="您的验证码"
      :rules="[{ pattern: /\d{6}/, message: '请填写验证码' }]"
    >
        <template v-slot:button>
            <van-button @click.prevent="randomCode">发送验证码</van-button>
        </template>
    </van-field>
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      code: '',
      sendCode: ''
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      if (values.phone === '13133809344' && values.code === this.sendCode){
           this.$notify({ type: 'success', message: '登陆成功' });
           window.localStorage.setItem('token', values.phone+values.code);
           setTimeout(()=>{
               this.$router.replace('/');
           }, 3000);
      }else{
           this.$notify({ type: 'danger', message: '用户名或验证码错误' });
      }
    },
    randomCode(){
        this.sendCode = String(Math.random()).slice(-6)
        console.log('发出的验证码...', this.sendCode);
    }
  },
};
</script>