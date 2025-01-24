import socket
import struct

# Configure these values for your target computer
MAC_ADDRESS = "D8-43-AE-13-D8-18"  # Replace with your computer's MAC address
IP_ADDRESS = "192.168.2.255"      # Usually leave as broadcast address
PORT = 9                            # Standard WoL port

def create_magic_packet(mac_address):
    """Create a Wake-on-LAN magic packet"""
    # Remove any delimiters from the MAC address and convert to bytes
    mac_bytes = bytes.fromhex(mac_address.replace(':', '').replace('-', ''))
    
    # Magic packet = 6 bytes of 0xFF followed by MAC address repeated 16 times
    return b'\xff' * 6 + mac_bytes * 16

def send_wol_packet():
    """Send the Wake-on-LAN packet"""
    # Create the magic packet
    packet = create_magic_packet(MAC_ADDRESS)
    
    try:
        # Create a UDP socket
        sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        
        # Allow broadcast
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
        
        # Send the packet
        sock.sendto(packet, (IP_ADDRESS, PORT))
        print(f"Wake-on-LAN packet sent to {MAC_ADDRESS}")
        
    except Exception as e:
        print(f"Error sending Wake-on-LAN packet: {e}")
        
    finally:
        sock.close()

# Run immediately when the script is opened
send_wol_packet()