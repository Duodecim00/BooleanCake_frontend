import { useState } from 'react';

import './DataDelivery.css';

function DataDelivery() {
	const [shipping,setShipping] = useState("Delivery");
	const [speedShipping,setSpeedShipping] = useState("Express");

	function handleShippingChange(event){
		setShipping(event.target.value);
	}
	function handlespeedShippingChange(event){
		setSpeedShipping(event.target.value);
	}

	return (

<div className="grid-container">
		<div className="item1">            
			<h1>Pagar</h1>
					
				<h3>Entrega</h3>
				<div className='card1'>
					<label className='Option'>Delivery</label>   
					<input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange}/>
				</div>
				<div className='card2'>
					<label className='Option'>Pick Up</label>
					<input type="radio" value="Pick Up" checked={shipping==="Pick Up"} onChange={handleShippingChange}/>
				</div>		
			
			<div >
					<div className='title_inputs'>
						<p>Pais</p>
					</div>
					<div className='inputbox'>	
						<input type="text" className='inputData' />
					</div>
			
			</div>
		<div >
				<p>Estado</p>
				<div className='inputbox'>			
					<input type="text" className='inputData' />
				</div>
			
		</div>
		<div>
				<p>Ciudad</p>
				<div className='inputbox'>			
					<input type="text" className='inputData' />
				</div>
			
		</div>
		<div >
				<p>Codigo Postal</p>
				<div className='inputbox'>
				
				
					<input type="text" className='inputData' />
				</div>
			
		</div>

		<div >
				<p>Punto de referencia</p>
				<div className='inputbox'>

					<input type="text" className='inputData' />
				</div>
			
		</div>

		<div >
				<p>Mapa</p>
				<div className='mapa'>

					
				</div>
			
		</div>

		<div >
				<h3>¿Que tan rapido quieres que llegue?</h3>
				<div className='card1'>
					<label className='Option'>Delivery</label>   
					<input type="radio" value="Express" checked={speedShipping==="Express"} onChange={handlespeedShippingChange}/>
					<label className='message'>2 - 3 Días hábiles</label>  
				</div>
				<div className='card2'>
					<label className='Option'>Pick Up</label>
					<input type="radio" value="Progrmada" checked={speedShipping==="Progrmada"} onChange={handlespeedShippingChange}/>
					<label className='message'>Programa tu entrega</label> 
				</div>		
		</div>
		</div>

	<div className="item2">
			<h1>Resumen</h1>
			<div className='productslist'>
				<div className='imgproducts'>
					<img className='imgkakes' src="https://i.pinimg.com/originals/fa/dc/78/fadc7818c3de3978a6e57ceee7dbc7d6.jpg" alt="" />
				</div>
				<div className='infoproducts'>
						<h1>pastel de canela</h1>
						<h2 className='price'>$25.25</h2>
				</div>
			</div>
			<div className='calculationbill'>
				<div className='calculation'>
					<div className='availablebalance'>
						<label className='description'>Saldo disponible</label>
						<label className='balance' >$93.00</label>
					</div>
					<div className='availablebalance'>
						<label className='description'>Total productos</label>
						<label className='balance' >-$70.00</label>
					</div>
					<div className='availablebalance'>
						<label className='description'>Total de envio</label>
						<label className='balance' >-$3.00</label>
					</div>
					<div className='availablebalance'>
						<label className='description'>Subtotal</label>
						<label className='balance' >$73.00</label>
					</div>
				</div>
				<div className='availablebalance'>
						<label className='description'>Saldo descontado</label>
						<label className='balance' >-$73.00</label>
					</div>
				<div className='availablebalance'>
						<label className='description_total'>Saldo descontado</label>
						<label className='total' >$0.00</label>
					</div>
					<h2 className='price'></h2>
			</div>
			<button type="submit" className="btnpay">Pagar</button>
	</div>
</div>	


	
		
	);
}
export default DataDelivery;
