<template>
  <div class="container">
    <CardForm :onSubmit="onSubmit">
      <Title>휴대폰 번호로 전송된 <br>인증번호를 입력해 주세요</Title>
      <div class="form__container">
        <ul class="list">
          <li class="item">
            <Type>인증번호</Type>
            <Counter ref="counter" />
            <InputContainer>
              <Input
                name="code"
                @update="onChange($event)"
                size="100%"
                placeholder="번호 6자리를 입력해 주세요" />
              <InnerButton
                type="button">
                재전송
              </InnerButton>
            </InputContainer>
            <ErrorText 
              :class="{active: this.$validate('code', this. data.code)}"
              text="인증번호" />
          </li>
        </ul>
      </div>
      <Button v-bind:disabled="!this.isCompleted">본인인증하기</Button>
    </CardForm>
    <Loading/>
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

