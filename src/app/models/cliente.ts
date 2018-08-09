export interface Cliente {

  id_Cliente: number;
  nroCliente: string;
  razonSocial: string;
  nombreFantasia: string;
  direccion: string;
  idCondicionIVA: number;
  nombreCondicionIVA: string;
  idFiscal: string;
  email: string;
  telPrimario: string;
  telSecundario: string;
  idLocalidad: number;
  nombreLocalidad: string;
  idProvincia: number;
  nombreProvincia: string;
  idPais: number;
  nombrePais: string;
  contacto: string;
  fechaAlta: Date;
  idEmpresa: number;
  nombreEmpresa: string;
  idViajante: number;
  nombreViajante: string;
  idCredencial: number;
  nombreCredencial: string;
  predeterminado: boolean;
  saldoCuentaCorriente: number;
  fechaUltimoMovimiento: Date;

}
