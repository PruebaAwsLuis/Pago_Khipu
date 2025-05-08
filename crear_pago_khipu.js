// crear_pago_khipu.js

const axios = require('axios');

// ✅ Tus credenciales de modo desarrollador
const API_KEY = '4557494e-30dc-43c4-9bae-26298cd38ef5'; // Llave secreta
const RECEIVER_ID = '497623'; // ID de cobrador

// ✅ Endpoint oficial según Swagger v3
const API_URL = 'https://payment-api.khipu.com/v3/payments';

// 💸 Datos del pago
const paymentData = {
  subject: 'Pago de prueba desde Node.js',
  currency: 'CLP',
  amount: 1,
  transaction_id: 'demo_' + Date.now(),
  payer_email: 'cliente@ejemplo.cl',
  return_url: 'https://tusitio.com/retorno',
  cancel_url: 'https://tusitio.com/cancelado',
  notify_url: 'https://webhook.site/b861c477-2ce7-469d-afdd-1dab09718a50',
  body: 'Gracias por tu compra'
};

// 🚀 Enviar solicitud POST a la API REST
axios.post(API_URL, paymentData, {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY
  }
})
.then(response => {
  console.log('✅ Pago creado correctamente');
  console.log('🔗 URL de pago:', response.data.payment_url);
})
.catch(error => {
  console.error('❌ Error al crear el pago:');
  if (error.response) {
    console.error('Status:', error.response.status);
    console.error('Mensaje:', error.response.data);
  } else {
    console.error(error.message);
  }
});
