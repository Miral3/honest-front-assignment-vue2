<template>
  <div class="container">
    <CardForm :onSubmit="onSubmit">
      <Title>휴대폰 번호로 전송된 <br>인증번호를 입력해 주세요</Title>
      <div class="form__container">
        <ul class="list">
          <li class="item">
            <Type>인증번호</Type>
            <Counter ref="counter" 
              :initialMinute="initialMinute"
              :initialSecond="initialSecond"
              :timeOver="timeOver" />
            <InputContainer>
              <Input
                name="code"
                @update="onChange($event)"
                size="100%"
                placeholder="번호 6자리를 입력해 주세요" />
              <InnerButton
                type="button"
                :onClick="reSendCode" >
                재전송
              </InnerButton>
            </InputContainer>
            <ErrorText 
              :class="{active: this.$validate('code', this. data.code)}"
              text="인증번호" />
          </li>
        </ul>
      </div>
      <Button v-bind:disabled="!this.isCompleted || !this.data.token">본인인증하기</Button>
    </CardForm>
    <Loading :isShow="isLoading" />
  </div>
</template>

<script>
import CardForm from '../components/CardForm.vue';
import Title from '../components/TitleText.vue';
import Type from '../components/TypeText.vue';
import InputContainer from '../components/InputContainer.vue'
import Input from '../components/MyInput.vue';
import Button from '../components/MyButton.vue';
import InnerButton from '../components/InnerButton.vue';
import Counter from '../components/MyCounter.vue';
import ErrorText from '../components/ErrorText.vue';
import Loading from '../components/MyLoading.vue';

export default {
  components: {
    CardForm,
    Title,
    Type,
    Input,
    InputContainer,
    Button,
    Counter,
    InnerButton,
    ErrorText,
    Loading
  },
  data() {
    return {
      data: {
        code: null,
        token: this.$route.params.token
      },
      isCompleted: false,
      isLoading: false,
      initialMinute: 3,
      initialSecond: "00",
    }
  },
  methods: {
    onChange(event) {
      const {name, value} = event.target;

      this.data[name] = value;
      this.checkValidate();
    },
    checkValidate() {
      this.isCompleted = this.$validate('code', this.data.code);
    },
    async onSubmit() {
      this.isLoading = true;

      const {error} = await this.$request('/submit', {
        method: 'POST',
        body: JSON.stringify({...this.data})
      })

      this.isLoading = false;
      this.checkCode(error);
    },
    checkCode(error) {
      if (!error) {
        alert('인증되셨습니다.');
        this.$router.push({name: 'IdentityAuthentication'})
      }
      if (error) {
        alert(error);
      }
    },
    timeOver() {
      this.data.token = null;
      alert('제한 시간을 초과하셨습니다. 재전송 버튼을 눌러주세요');
    },
    async reSendCode() {
      this.isLoading = true;

      const {response} = await this.$request('/request', {
        method: 'POST',
        body: JSON.stringify({...this.$route.params.inputData})
      })

      this.isLoading = false;

      this.data.token = response.token;
      this.$refs.counter.resetTimer();
    }
  }
}
</script>

<style scoped>
  .container {  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
  .container .form__container {
    flex-grow: 1;
  }
  .container .form__container .list .item {
    margin-top: 32px;
  }
  
</style>

