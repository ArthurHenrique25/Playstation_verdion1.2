


from moviepy.editor import AudioFileClip

def convert_mpeg_to_mp3(input_file, output_file):
    # Carrega o arquivo de áudio (MPEG)
    audio_clip = AudioFileClip(input_file)

    # Salva o arquivo no formato MP3
    audio_clip.write_audiofile(output_file)

    print(f"Conversão concluída: {output_file}")

# Caminho do arquivo de entrada (MPEG)
input_file_path = 'C:/Projetohtml_css_javascripty/music/sons/neve.mpeg'

# Caminho do arquivo de saída (MP3)
output_file_path = 'neve.mp3'

convert_mpeg_to_mp3(input_file_path, output_file_path)