import {render, screen} from '@testing-library/react'
import Dropdown from './dropdown'

test('should have clickable dropdown iitems', () => { 
    render(<Dropdown />)
})