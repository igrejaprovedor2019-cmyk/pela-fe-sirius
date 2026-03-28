:root { --blue-sirius: #001c3d; --gold-sirius: #ffcc00; }
* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', sans-serif; }

body { background-color: #f4f4f4; padding: 10px; }
.container { background: white; max-width: 480px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.2); }

/* HEADER IGUAL À FOTO */
.sirius-header { background-color: var(--blue-sirius); color: white; padding: 30px 20px; text-align: center; }
.main-star { font-size: 50px; color: var(--gold-sirius); margin-bottom: 10px; }
.sirius-header h1 { font-size: 18px; letter-spacing: 1px; font-weight: bold; }
.divider { width: 40px; height: 3px; background: var(--gold-sirius); margin: 15px auto 0; border-radius: 2px; }

/* PROGRESSO */
.progress-container { padding: 15px 20px 0; background: white; }
.progress-bar { height: 6px; background: var(--blue-sirius); width: 10%; border-radius: 3px; transition: 0.4s; }
.steps-info { font-size: 11px; text-align: center; margin-top: 6px; font-weight: bold; color: #666; }

/* FORMULÁRIO */
#multiStepForm { padding: 20px; }
.form-step { display: none; }
.form-step.active { display: block; animation: fadeIn 0.3s; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

h2 { font-size: 14px; margin-bottom: 15px; color: var(--blue-sirius); border-left: 4px solid var(--gold-sirius); padding-left: 10px; }
.input-group { margin-bottom: 12px; }
label { display: block; font-size: 10px; font-weight: bold; margin-bottom: 4px; color: #333; text-transform: uppercase; }
input, select, textarea { width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; }

.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
.checkbox-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px; background: #f9f9f9; padding: 10px; border-radius: 6px; }

.upload-area { background: #fffbe6; border: 2px dashed var(--gold-sirius); padding: 15px; text-align: center; border-radius: 8px; margin: 10px 0; }
.upload-area p { font-size: 11px; font-weight: bold; margin-bottom: 8px; }

.btn-group { display: flex; gap: 10px; margin-top: 25px; }
button { flex: 1; padding: 15px; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.btn-next { background: var(--blue-sirius); color: white; }
.btn-prev { background: #ddd; color: #444; }
.btn-submit { background: #27ae60; color: white; font-size: 16px; }

/* MODAL */
.modal { display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); align-items: center; justify-content: center; }
.modal-content { background: white; padding: 30px; border-radius: 15px; text-align: center; width: 85%; }
.pulse-icon { font-size: 50px; color: #e74c3c; animation: pulse 1s infinite; margin-bottom: 15px; }
@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
#btn-entendido { background: #25d366; color: white; width: 100%; margin-top: 20px; }
