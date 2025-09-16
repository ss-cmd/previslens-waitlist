// 邮箱格式验证函数
export function validateEmail(email: string): boolean {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    return regex.test(email)
  }
  