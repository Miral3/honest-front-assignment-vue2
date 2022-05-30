<template>
  <div class="container">
    <CardForm :onSubmit="onSubmit">
      <Title>비대면 대출을 위해 본인인증이 필요해요</Title>
      <div class="form__container">
        <ul class="list">
          <li class="item">
            <Type>휴대폰번호</Type>
            <InputContainer>
              <Input 
                ref="mobileFirst"
                name="mobileFirst" 
                @update="onChange($event)" /> 
              - 
              <Input
                ref="mobileCenter"
                name="mobileCenter"
                @update="onChange($event)"
                :size="132" /> 
              - 
              <Input
                ref="mobileLast"
                name="mobileLast"
                @update="onChange($event)"
                :size="132" />
            </InputContainer>
            <ErrorText 
              :class="{active: this.$validate('mobile', this.data.mobile)}"
              text="핸드폰번호" />
          </li>
          <li class="item">
            <Type>주민등록번호</Type>
            <InputContainer>
              <Input
                name="civilcodeFirst"
                @update="onChange($event)"
                :size="180"
                placeholder="앞 6자리"/>
              -
              <Input
                name="civilcodeLast"
                @update="onChange($event)"
                :size="180"
                placeholder="뒤 7자리"
                type="password" />
            </InputContainer>
            <ErrorText 
              :class="{active: this.$validate('civilcodeFirst', this.data.civilcodeFirst) 
              && this.$validate('civilcodeLast', this.data.civilcodeLast)}"
              text="주민등록번호" />
          </li>
          <li class="item">
            <Type>이름</Type>
            <InputContainer>
              <Input
                name="name"
                @update="onChange($event)"
                size="100%"
                placeholder="이름을 입력해 주세요"/>
            </InputContainer>
            <ErrorText 
              :class="{active: this.$validate('name',this.  data.name)}"
              text="이름" />
          </li>
        </ul>
      </div>
      <Button v-bind:disabled="!this.isCompleted">다음</Button>
    </CardForm>
    <Loading />
  </div>
</template>

<script>
import CardForm from '../components/CardForm.vue';
import Title from '../components/TitleText.vue';
import Type from '../components/TypeText.vue';
import InputContainer from '../components/InputContainer.vue'
import Input from '../components/MyInput.vue';
import Button from '../components/MyButton.vue';
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
    ErrorText,
    Loading
  },
  data() {
    return {
      data: {
        name: null,
        civilcodeFirst: null,
        civilcodeLast: null,
        mobile: null,
      },
      isCompleted: false,
    }
  },
  methods: {
    onChange(event) {
      const {name, value} = event.target;

      if (name.includes('mobile')) {
        this.data.mobile = this.$refs['mobileFirst'].$el.value + this.$refs['mobileCenter'].$el.value + 
        this.$refs['mobileLast'].$el.value;
        return;
      }

      this.data[name] = value;
      this.checkValidate();
    },
    checkValidate() {
      this.isCompleted = Object.keys(this.data).every(key  => this.$validate(key, this.data[key]));
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
    margin-top: 24px;
  }
  
</style>

