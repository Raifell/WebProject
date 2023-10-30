from django.shortcuts import render


def main_page(request):
    return render(request, 'main/index_main.html')


def side_page(request):
    return render(request, 'main/index_side.html')
