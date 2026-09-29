# Manual de Usuario
## JTVI ERP - Sistema de Gestión de Instalación de Televisiones

---

### 1. Introducción
El **JTVI ERP** es un sistema diseñado para administrar y dar seguimiento a la logística de instalación de televisores en escuelas públicas del estado de Jalisco. Este manual te guiará paso a paso para utilizar las funciones principales del sistema, desde el inicio de sesión hasta la actualización de los estados de entrega.

---

### 2. Acceso al Sistema (Login)
Para ingresar al sistema, necesitas acceder desde tu navegador web a la dirección proporcionada por el equipo de TI (por ejemplo, `http://localhost:3000/login.html`).

1. En la pantalla de inicio, verás un formulario de acceso.
2. Ingresa tu **Usuario** y **Contraseña**.
3. Haz clic en el botón **Ingresar**.
4. *Nota:* Si las credenciales son incorrectas, el sistema mostrará un mensaje de error en color rojo.

---

### 3. El Tablero Principal (Kanban Dashboard)
Una vez dentro, el sistema te redirigirá al **Dashboard JTVI**. Aquí verás todos los folios de instalación organizados en columnas que representan su estado actual.

#### Las 4 Columnas de Estado:
- **Pendiente:** Folios nuevos o escuelas cuyo contacto falló (bloqueados).
- **Pre-Validado (PC1):** El contacto con la escuela fue exitoso y las TVs están físicamente en la escuela.
- **En Instalación (PC2):** La visita está agendada con el director y los técnicos están en campo.
- **Cerrado Liquidable (PC3):** La instalación concluyó y los 3 documentos oficiales están firmados.

#### ¿Cómo mover un folio?
El tablero funciona con tecnología *Drag and Drop* (Arrastrar y Soltar). 
- Haz clic sostenido sobre la tarjeta de un folio y **arrástrala** hacia la siguiente columna para actualizar su estado. 
- *Importante:* El sistema te impedirá saltarte pasos (ej. pasar de Pendiente a Cerrado directamente). Todo folio debe seguir el orden lógico.

---

### 4. Vista de Detalle del Folio
Si necesitas ver la información completa de una escuela o actualizar su estado manualmente, haz **clic sobre la tarjeta** del folio en el tablero Kanban.

Dentro del Detalle del Folio podrás visualizar:
1. **Información de la Escuela:** Nombre, CCT, Director, Teléfono y Municipio.
2. **Puntos de Control (PC):** Muestra qué validaciones técnicas se han completado y en qué fecha.
3. **Televisores Asignados:** Una tabla con el número de serie, modelo y estado de cada pantalla.
4. **Evidencia Fotográfica / Documental:** Archivos adjuntos o confirmaciones de las firmas.

#### Cambiar el Estado desde el Detalle
1. Ve al final de la página y haz clic en el botón verde **Cambiar Estado**.
2. Se abrirá una ventana emergente (Modal).
3. Selecciona el nuevo estado en el menú desplegable.
4. Haz clic en **Guardar**. El sistema validará la regla de negocio y actualizará la información.

---

### 5. Reglas y Bloqueos
El sistema está diseñado para evitar errores humanos. Si intentas avanzar un folio que no cumple con los requisitos, el sistema lo marcará como **Bloqueado**. 

**Ejemplos de bloqueos comunes:**
- Intentar agendar una visita sin confirmar previamente que el director estará presente.
- Intentar cerrar un folio si los 3 documentos (Remisión, Vale de salida y Resguardo) no han sido firmados.

Si encuentras un folio bloqueado, revisa la información de contacto o los documentos pendientes antes de intentar moverlo nuevamente.
