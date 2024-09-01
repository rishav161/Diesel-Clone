
import '../StyleforSelection.css'
import { Heading } from '@chakra-ui/react'
const Sortproducts = ({filterby , setFilterBy}) => {
   
  return (
    <div>
    <div className="checkbox_group">
    <Heading as='h4' size='md' id='sorteing_Heading'>Sort The Products By Price</Heading>
<label>
  <input type="checkbox" value="asc" checked={filterby === "asc"} onChange={(e) => setFilterBy(e.target.checked ? "asc" : "")} />
  Low To High
</label>
<label>
  <input type="checkbox" value="desc" checked={filterby === "desc"} onChange={(e) => setFilterBy(e.target.checked ? "desc" : "")} />
  High To Low
</label>
</div>
    </div>
  )
}

export default Sortproducts
