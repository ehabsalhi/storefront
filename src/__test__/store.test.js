import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Main from "../Main";

describe('', () => {
     it('', () => {
          render(<Main />)
          const text = screen.getByText(/browse our categories/i)
          const category = screen.getByText(/electronics/i)

          fireEvent.click(category)
          const selectorCategory = screen.getByText(/Category : ELECTRONICS/i)
          const card = screen.getByText(/camera/i)
          const price = screen.getByText(/225\$/i)
          const add_To_Cart = screen.getAllByText(/Add To Cart/i)
          const Cart = screen.getByText(/CART/)
          fireEvent.click(add_To_Cart[0])

          const removeBtn = screen.getByRole('button', {
               name : /x/i
          })


          

          expect(text).toBeInTheDocument()
          expect(category).toBeInTheDocument()
          expect(selectorCategory).toBeInTheDocument()
          expect(card).toBeInTheDocument()
          expect(price).toBeInTheDocument()
          expect(add_To_Cart[0]).toBeInTheDocument()
          expect(removeBtn).toBeInTheDocument()
          expect(Cart.textContent).toEqual('CART ( 1 )')
     })
})