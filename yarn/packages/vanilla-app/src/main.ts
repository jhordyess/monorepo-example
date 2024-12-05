import './style.css'
import { countNumbers, countSpecialChars } from '@common/validator'

const Form = document.getElementById('passwordForm')
const passwordInput = document.getElementById('password')
const confirmPasswordInput = document.getElementById('password2')
const messageDiv = document.getElementById('message')

const isFormElement = Form instanceof HTMLFormElement
const isPasswordInputElement = passwordInput instanceof HTMLInputElement
const isConfirmPasswordInputElement = confirmPasswordInput instanceof HTMLInputElement
const isMessageDivValid = messageDiv instanceof HTMLDivElement

const isAllValid =
  isFormElement && isPasswordInputElement && isConfirmPasswordInputElement && isMessageDivValid

if (isAllValid)
  Form.addEventListener('submit', event => {
    event.preventDefault()

    const passwordValue = passwordInput.value
    const password2Value = confirmPasswordInput.value

    messageDiv.textContent = ''

    try {
      if (passwordValue !== password2Value) {
        throw new Error('❌ Passwords do not match.')
      }

      if (passwordValue.length < 7) {
        throw new Error('❌ Password must be at least 7 characters long.')
      }

      const spChars = countSpecialChars(passwordValue)

      if (spChars < 2) {
        throw new Error('❌ Password must contain at least 2 special characters.')
      }

      const numbers = countNumbers(passwordValue)

      if (numbers < 2) {
        throw new Error('❌ Password must contain at least 2 numbers.')
      }

      messageDiv.textContent = '✅ Password is valid.'
      messageDiv.classList.remove('text-red-500')
      messageDiv.classList.add('text-green-500')
    } catch (error) {
      messageDiv.textContent = (error as Error)?.message || '❌ Something went wrong.'
      messageDiv.classList.remove('text-green-500')
      messageDiv.classList.add('text-red-500')
    }
  })
