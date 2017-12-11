from django import http

def contacts (request):
    #1 generate a list contacts for request.user
    return http.JsonResponse({'contacts': contacts})
