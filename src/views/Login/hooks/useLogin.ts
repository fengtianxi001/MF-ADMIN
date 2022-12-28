import { ref, watchEffect } from 'vue';
import { useCaptcha } from '@/hooks';
import { Message } from '@arco-design/web-vue';
import { useRouter } from 'vue-router';

function useLogin() {
  const { caprchaSrc, captchaText, captchaRefresh, captchaValidate } = useCaptcha([72 * 2, 32 * 2]);
  const router = useRouter();
  const account = ref('');
  const password = ref('');
  const captcha = ref(captchaText.value);

  const onLogin = () => {
    //todo
    if (account.value === 'admin' && password.value === 'admin' && captchaValidate(captcha.value)) {
      Message.success('登录成功');
      router.push('/');
    } else {
      Message.error('登录失败');
    }
  };

  if (import.meta.env.DEV) {
    account.value = 'admin';
    password.value = 'admin';
    watchEffect(() => {
      captcha.value = captchaText.value;
    });
  }
  return {
    account,
    password,
    captcha,
    caprchaSrc,
    onLogin,
    captchaRefresh,
    captchaValidate,
  };
}

export default useLogin;
