import { ICliente } from "../@types";
import { ApiService } from "./apiServices";

class ClientService extends ApiService {

    public async mostrarListaClientes(): Promise<ICliente[]> {
        try {
            const response = await this.get<ICliente[]>(`cliente`);
            return response; 
        } catch (error) {
            throw error;
        }
    }
    
    public async getClienteByCpf(cpf: string): Promise<ICliente> {
        try {
            cpf=cpf.replace(/\D/g, '');
            const response = await this.get<ICliente>(`cliente/cpf/${cpf}`);
            return response; 
        } catch (error) {
            throw error;
        }
    }
}

export const clientService = new ClientService();