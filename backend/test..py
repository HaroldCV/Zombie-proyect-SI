import stripe

# Configura tu clave secreta de Stripe
stripe.api_key = 'sk_test_51NEMXLEUYV0GDpXAKzP4fn8JXdLIewgg0MICy0p4fz6cfjy4Vfa5lpyyTKvkzDf3NzWarsLqeEHqTifzYuixyyIB00e0yuVywt'

def crear_pago(monto, descripcion, token):
    try:
        # Crea un cargo utilizando la API de Stripe
        cargo = stripe.Charge.create(
            amount=monto,
            currency='usd',
            description=descripcion,
            source=token
        )
        
        # Retorna el ID del cargo creado
        return cargo.id
    
    except stripe.error.CardError as e:
        # Si hay un error con la tarjeta, maneja la excepción
        mensaje_error = e.error.message
        return mensaje_error
    
    except stripe.error.StripeError as e:
        # Maneja otras excepciones de Stripe
        mensaje_error = e.error.message
        return mensaje_error

# Ejemplo de uso
monto = 1000  # Monto en centavos
descripcion = 'Ejemplo de pago con Stripe'
token = '4242424242424242'  # Reemplaza con un token de tarjeta válido

id_cargo = crear_pago(monto, descripcion, token)
print(f'ID del cargo: {id_cargo}')
