import http.server
import socketserver

# Porta 8000
port1 = 8000

# Porta 8080
port2 = 8080

# Configuração do primeiro servidor na porta 8000
handler1 = http.server.SimpleHTTPRequestHandler
httpd1 = socketserver.TCPServer(("localhost", port1), handler1)

# Configuração do segundo servidor na porta 8080
handler2 = http.server.SimpleHTTPRequestHandler
httpd2 = socketserver.TCPServer(("localhost", port2), handler2)

print(f"Servidor 1 rodando na porta {port1}")
print(f"Servidor 2 rodando na porta {port2}")

# Iniciar os servidores
httpd1.serve_forever()
httpd2.serve_forever()
