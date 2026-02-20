import { defineStore } from 'pinia'

// Основной интерфейс товара из API
export interface Product {
  id: number
  name: string
  price: number
  img: string
  rating: number
  oldPrice?: number
}

// Интерфейс товара в корзине (ID + Выбранные параметры)
export interface CartItem extends Product {
  quantity: number
  selectedSize: string
  selectedColor: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[]
  }),

  actions: {
    saveCart() {
      if (process.client) {
        localStorage.setItem('cart_data', JSON.stringify(this.items))
      }
    },

    loadCart() {
      if (process.client) {
        const data = localStorage.getItem('cart_data')
        if (data) {
          this.items = JSON.parse(data)
        }
      }
    },

    // Теперь принимаем еще size и color
    addToCart(product: Product, quantity: number, size: string, color: string) {
      // Ищем товар, у которого совпадает ВСЁ: id, размер и цвет
      const existing = this.items.find(i => 
        i.id === product.id && 
        i.selectedSize === size && 
        i.selectedColor === color
      )

      if (existing) {
        existing.quantity += quantity
      } else {
        // Сохраняем товар с выбранными характеристиками
        this.items.push({ 
          ...product, 
          quantity, 
          selectedSize: size, 
          selectedColor: color 
        })
      }
      this.saveCart()
    },

    // Удаляем конкретную комбинацию
    removeFromCart(productId: number, size: string, color: string) {
      this.items = this.items.filter(i => 
        !(i.id === productId && i.selectedSize === size && i.selectedColor === color)
      )
      this.saveCart()
    },

    // Обновляем количество для конкретной комбинации
    updateQuantity(productId: number, size: string, color: string, quantity: number) {
      const item = this.items.find(i => 
        i.id === productId && 
        i.selectedSize === size && 
        i.selectedColor === color
      )
      if (item) {
        item.quantity = Math.max(1, quantity)
      }
      this.saveCart()
    }
  },

  getters: {
    totalItems: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: (state) => state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  }
})